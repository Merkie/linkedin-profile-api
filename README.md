# LinkedIn Profile API

---

Programatically collect information from LinkedIn profiles without authentication or headless browsers.

## Usage:

GET /api/fetch-profile/archer-calder

```json
{
	"success": true,
	"profile": {
		"name": "Ashal Archer Calder",
		"description": "Full-Stack Developer",
		"location": "Cypress, Texas, United States",
		"jobTitles": ["Software Engineer"],
		"worksFor": [
			{
				"name": "FloWater",
				"location": "United States",
				"startDate": "2023-10",
				"description": "In my role as a Software Engineer at Flowater, I employ a diverse tech stack including Go, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, SQL, and ReactJS to develop and optimize an internal project aimed at harnessing the power of Artificial Intelligence to amplify the company's operational efficiency. My endeavors encompass full-stack development, carefully architecting both backend and frontend structures to establish a system that serves strategic organizational goals. While my work prominently involves employing AI, the specifics weave into a broader tapestry of technical and strategic initiatives, all converging to streamline processes, enhance user engagement, and propel the company toward its objectives, creating a synergy between technology and strategic business outcomes. This intersection of AI and software engineering not only underpins our operational strategy but also fortifies our commitment to evolving and adopting forward-thinking technologies."
			}
		],
		"experience": [
			{
				"name": "Heleta.com",
				"location": "United States",
				"startDate": "2022-01",
				"endDate": "2023-04",
				"description": "Working at Heleta.com, I managed both the eCommerce site, consisting of a Magento website with customizations applied, as well as the back-end database and internal tool, which managed inventory, product pricing, order fulfillment, payment verification, and more."
			},
			{
				"name": "Freelance",
				"location": "Remote",
				"startDate": "2020-01",
				"endDate": "2022-01",
				"description": "As a freelance developer, I helped many clients achieve satisfactory results in application development, website development, data collection, process automation, and more. I had to learn new technologies frequently and quickly adapt to new workflows."
			}
		],
		"education": [{ "name": "Lone Star College", "startDate": "2023-01", "endDate": "2025-01" }]
	},
	"elapsedMs": 21616
}
```

## Requirements:

- [Bun Runtime](https://bun.sh/)
- [BrightData's Web Unlocker](https://brightdata.com/products/web-unlocker)

## Local Setup:

1. Clone repo and create .env file, you can also rename .env.example to .env to do this. Then, configure the port you'd like to use and add your proxy url.

```
PORT=8080
BRIGHTDATA_UNBLOCKER_PROXY_URL=http://brd-customer-<your customer id>-zone-unblocker-country-us:<your proxy password>@brd.superproxy.io:22225
```

2. Install dependencies.

```shell
bun install
```

3. Run server.

```shell
bun serve
```
