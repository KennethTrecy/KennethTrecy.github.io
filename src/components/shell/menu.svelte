<script lang="ts">
	export let mustShowHorizontally: boolean = false
</script>

<ul class="menu bg-primary-100" class:menu-horizontal={mustShowHorizontally}>
	<li>
		<a href="/" class="inline-flex flex-row flex-nowrap items-center">
			<span class="material-symbols-outlined">home</span>
			<span class="flex-1">Home<span>
		</a>
		<a href="projects.htm" class="inline-flex flex-row flex-nowrap items-center">
			<span class="material-symbols-outlined">code</span>
			<span class="flex-1">Projects<span>
		</a>
		<a href="about_myself.htm" class="inline-flex flex-row flex-nowrap items-center">
			<span class="material-symbols-outlined">contact_page</span>
			<span class="flex-1">Contacts<span>
		</a>
	</li>
</ul>
