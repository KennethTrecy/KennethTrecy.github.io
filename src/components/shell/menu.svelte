<script lang="ts">
	import Icon from "@/components/general/icon.svelte"

	export let mustShowHorizontally: boolean = false
</script>

<ul class="menu bg-primary-100" class:menu-horizontal={mustShowHorizontally}>
	<li>
		<a href="/" class="inline-flex flex-row flex-nowrap items-center">
			<Icon name="home"/>
			<span class="flex-1">Home<span>
		</a>
		<a href="/projects" class="inline-flex flex-row flex-nowrap items-center">
			<Icon name="code"/>
			<span class="flex-1">Projects<span>
		</a>
		<a href="/about_myself" class="inline-flex flex-row flex-nowrap items-center">
			<Icon name="badge"/>
			<span class="flex-1">About myself<span>
		</a>
		<a href="/about_myself#contact_details" class="inline-flex flex-row flex-nowrap items-center">
			<Icon name="contacts"/>
			<span class="flex-1">Contacts<span>
		</a>
	</li>
</ul>
