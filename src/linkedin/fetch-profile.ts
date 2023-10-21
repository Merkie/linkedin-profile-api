import * as cheerio from 'cheerio'

export default async function FetchProfile(id: string) {
	const response = await fetch(`https://www.linkedin.com/in/${id}/`, {
		proxy: process.env.BRIGHTDATA_UNBLOCKER_PROXY_URL,
	})

	// Load HTML into cheerio for parsing
	const html = await response.text()
	const $ = cheerio.load(html)

	// Get the description and location from the page
	const description = $('h2.top-card-layout__headline').text().trim()
	const location = $('div.top-card__subline-item').text().trim()

	// Find the person json object
	const personBlob = $('script[type="application/ld+json"]')
		.map((i, el) => {
			const text = $(el).text().trim()
			try {
				return JSON.parse(text)
			} catch (e) {
				return null
			}
		})
		.get()
		.filter(Boolean)
		.find(
			(obj: any) => ((obj['@graph'] || [undefined])[0] || { '@type': '' })['@type'] === 'Person'
		)
	if (!personBlob) return null

	// Create the profile object
	const profileFull = {
		name: personBlob['@graph'][0].name,
		description,
		location: location || personBlob['@graph'][0].address.addressLocality,
		jobTitles: personBlob['@graph'][0].jobTitle,
		worksFor: personBlob['@graph'][0].worksFor.map((x: any) => ({
			name: x.name,
			location: x.location,
			startDate: x.member.startDate,
			description: x.member.description,
		})),
		experience: personBlob['@graph'][0].alumniOf
			.filter((x: any) => x['@type'] === 'Organization')
			.map((x: any) => ({
				name: x.name,
				location: x.location,
				startDate: x.member.startDate,
				endDate: x.member.endDate,
				description: x.member.description,
			})),
		education: personBlob['@graph'][0].alumniOf
			.filter((x: any) => x['@type'] === 'EducationalOrganization')
			.map((x: any) => ({
				name: x.name,
				location: x.location,
				startDate: x.member.startDate,
				endDate: x.member.endDate,
				description: x.member.description,
			})),
	}

	return profileFull
}
