<script lang="ts">
	import pageMeta from "@/routes/meta"
	import { externalTypes, internalTypes, authorTypes } from "@/components/general/links/constants"

	import { profile } from "@/constants/drive_images"

	import makeSet from "@/utilities/resource/make_set"
	import defineHeadingInfo from "@/utilities/definers/define_heading_info"

	import BaseLink from "@/components/general/links/base.svelte"
	import CommonHead from "@/components/general/common_head.svelte"
	import ProjectCard from "@/components/general/card/project.svelte"
	import ExternalLink from "@/components/general/links/external.svelte"
	import PageDetailCard from "@/components/general/card/page_detail.svelte"
	import PrimaryHeading from "@/components/general/headings/primary.svelte"
	import SimpleText from "@/components/general/containers/simple_text.svelte"
	import SecondaryHeading from "@/components/general/headings/secondary.svelte"
	import StructuredList from "@/components/general/containers/structured_list.svelte"
	import StructuredArticle from "@/components/general/containers/structured_article.svelte"
	import StructuredSection from "@/components/general/containers/structured_section.svelte"
	import StructuredListItem from "@/components/general/containers/structured_list_item.svelte"

	const greetings = defineHeadingInfo({
		"prefix": "👋🏽",
		"text": "Hi! "
	})
	const specialty = defineHeadingInfo({
		"prefix": "🌟",
		"text": "Specialty"
	})
	const personalProjects = defineHeadingInfo({
		"prefix": "⛏️",
		"text": "Some of my personal projects"
	})
	const security = defineHeadingInfo({
		"prefix": "🔐",
		"text": "Security in mind"
	})
	const sourceSet = makeSet(profile.responsiveLinks)
</script>

<svelte:head>
	<CommonHead {pageMeta}/>
</svelte:head>

<StructuredArticle>
	<PrimaryHeading slot="title" prefix="🌀">KennethTrecy's Portfolio</PrimaryHeading>
	<svelte:fragment slot="content">
		<div class="divider"></div>
		<div
			itemprop="mainEntity"
			itemscope
			itemtype="https://schema.org/Person"
			class="hero lg:w-[125%] lg:ml-[-12.5%]">
			<!--
				To calculate left margin of hero component, the following method was done:
				1. Let `self` be the current component
				2. On large screens, resize the self's width to 125% of the own width.
				3. To center the contents, self's horizontal margin size should be -25% of the own
					original width.
				4. Therefore, target left margin size of self on large screens is -25% / 2 = -12.5%.
			 -->
			<div class="hero-content flex flex-col xl:flex-row">
				<img
					itemprop="image"
					src={profile.defaultLink}
					srcset={sourceSet}
					width={profile.defaultWidth}
					height={profile.defaultHeight}
					alt={profile.description}
					class="max-w-full lg:max-w-sm bg-primary"/>
				<section class="max-w-sm xl:max-w-md text-center xl:text-left" id={greetings.id}>
					<SecondaryHeading headingInfo={greetings} variant="name">
						I am <span itemprop="givenName">Kenneth Trecy</span>!
					</SecondaryHeading>
					<p itemprop="knowsAbout" class="py-6 container md:px-0">
						I usually develop the back-end of the applications I have handled. I ensure their quality though automated tests through CI.
					</p>
					<BaseLink
						itemprop="mainEntityOfPage"
						address="/about_myself"
						relationship={[ ...internalTypes, ...authorTypes ]}
						context="self">
						<span class="btn btn-primary">Know more about me</span>
					</BaseLink>
				</section>
			</div>
		</div>
		<div class="divider"></div>
		<div class="container md:m-0 md:p-0 flex flex-col justify-center items-center">
			<StructuredSection id={specialty.id}>
				<SecondaryHeading headingInfo={specialty}/>
				<SimpleText>Web development is my expertise. I have tried different technologies too, such as networking, Internet of Things (<abbr>IoT</abbr>), and game.</SimpleText>
				<SimpleText>During my free time, I apply my skills on my personal projects.</SimpleText>
			</StructuredSection>
			<StructuredSection itemtype="https://schema.org/CreativeWork" id={personalProjects.id}>
				<SecondaryHeading class={[ "my-4" ]} headingInfo={personalProjects}/>
				<StructuredList order="unordered" variant="project">
					<StructuredListItem variant="project">
						<ProjectCard
							title="Virdafils"
							description="A driver for Laravel framework which use a database like file storage system."
							link="https://github.com/KennethTrecy/virdafils"/>
					</StructuredListItem>
					<StructuredListItem variant="project">
						<ProjectCard
							title="Elomocato"
							description="Custom cast classes to be used with Laravel framework."
							link="https://github.com/KennethTrecy/elomocato"/>
					</StructuredListItem>
					<StructuredListItem variant="project">
						<ProjectCard
							title="Comroconbu"
							description="Builder for common Rollup configurations."
							link="https://github.com/KennethTrecy/comroconbu"/>
					</StructuredListItem>
				</StructuredList>
				<p itemprop="text" class="mt-4">
					Other projects can be found on the
					<ExternalLink
						address="https://github.com/KennethTrecy?tab=repositories"
						itemprop="isBasedOn">
						list of my repositories
					</ExternalLink>
					in
					<BaseLink
						address="https://github.com/KennethTrecy"
						relationship={[ ...externalTypes, ...authorTypes ]}
						context="other">
						my GitHub profile
					</BaseLink>
					or in this site's <BaseLink
						address="/projects"
						relationship={[ ...internalTypes, ...authorTypes ]}
						itemprop="mainEntityOfPage">
						project list</BaseLink>.
				</p>
			</StructuredSection>
			<StructuredSection id={security.id}>
				<SecondaryHeading headingInfo={security}/>
				<SimpleText>
					I also like reading articles about cybersecurity. For this reason, I build applications with security in mind as much as possible to be resilient from attacks.
				</SimpleText>
				<SimpleText>
					I have also made my recent commits to be signed with my own cryptographic keys.
				</SimpleText>
			</StructuredSection>
		</div>
	</svelte:fragment>
	<PageDetailCard slot="metadata" {pageMeta}/>
</StructuredArticle>

<style lang="postcss">
	.hero-content img {
		clip-path: polygon(100% 49.3652404307133%,80.9354966417325% 88.953089569181%,38.0979464407022% 98.7304808614266%,3.74489842506188% 71.334839241954%,3.74489842506188% 27.3956416194726%,38.0979464407022% 0%,80.9354966417325% 9.77739129224562%);

		animation-name: heptagon_border;
		animation-duration: 15s;
		animation-timing-function: linear;
		animation-direction: reverse;
		animation-iteration-count: infinite;
	}

	@screen md {
		.hero-content img {
			animation-play-state: paused;
		}
	}

	.hero-content:hover img {
		animation-play-state: running;
	}

	@media (prefers-reduced-motion) {
		.hero-content img, .hero-content:hover img {
			animation-play-state: paused;
		}
	}

	@keyframes heptagon_border {
		0% {
			clip-path: polygon(100% 49.3652404307133%,80.9354966417325% 88.953089569181%,38.0979464407022% 98.7304808614266%,3.74489842506188% 71.334839241954%,3.74489842506188% 27.3956416194726%,38.0979464407022% 0%,80.9354966417325% 9.77739129224562%);
		}

		11.1111111111111% {
			clip-path: polygon(88.132429993492% 81.8718178070574%,47.9562512734119% 100%,8.73363000542924% 79.8917353549161%,0% 36.6889572834008%,28.3319627847975% 2.92423884937288%,72.3949725161516% 4.02310170839218%,99.0086841447569% 39.1580797148998%);
		}

		22.2222222222222% {
			clip-path: polygon(59.1059678626461% 100%,16.9931985581826% 88.1513039076694%,0% 47.838673872635%,20.9225973004888% 9.41834253906949%,64.0058479491751% 1.82160303308063%,96.8071854694454% 30.7689551479233%,94.6265336831886% 74.4624523227487%);
		}

		33.3333333333333% {
			clip-path: polygon(25.461376197649% 95.414355033462%,0.428772597097313% 58.6982689989008%,13.5269915130059% 16.2348862091301%,54.8928069467218% 0%,93.3769161677983% 22.2188108183114%,100% 66.1601009367329%,69.77474123139% 98.735182657125%);
		}

		44.4444444444444% {
			clip-path: polygon(2.64415938906755% 67.1403162144153%,6.99191988149416% 23.6909935485973%,43.6727525614948% 0%,85.0652422684021% 13.9071369189152%,100% 54.9400465515059%,77.2308485708571% 92.2001110256133%,33.9034234131636% 97.6297418254323%);
		}

		55.5555555555556% {
			clip-path: polygon(0.414373761791458% 32.719211238293%,33.9034234131635% 2.22978562727608%,77.2308485708571% 7.65941642709506%,100% 44.9194809012024%,85.0652422684021% 85.9523905337931%,43.6727525614948% 99.8595274527083%,6.99191988149418% 76.1685339041111%);
		}

		66.6666666666667% {
			clip-path: polygon(24.6134090747481% 6.18344821350914%,68.1847050717042% 2.91823097633214%,97.9038134126969% 34.9478122704524%,91.3916393576283% 78.153264097008%,53.551982794107% 100%,12.8788769027908% 84.0369822522777%,0% 42.2846888040959%);
		}

		77.7777777777778% {
			clip-path: polygon(59.7744649491237% 0.711191094984179%,95.6967735313489% 26.5375721478719%,97.9020888062254% 70.7252491257802%,64.7297633915376% 100%,21.159234916667% 92.3173402661539%,0% 53.4624694015265%,17.1853941035203% 12.6938976621063%);
		}

		88.8888888888889% {
			clip-path: polygon(89.184696689145% 18.0265913396582%,100% 60.5009604176716%,73.5354323751696% 95.439040999064%,29.7193530149494% 96.5317457990843%,1.54616336271954% 62.9562458162012%,10.2308498549449% 19.9955773529097%,49.2336664276605% 0%);
		}
	}
</style>
