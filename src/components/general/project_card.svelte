<script lang="ts">
	import Icon from "@/components/general/icon.svelte"

	export let title: string
	export let description: string
	export let link: string
</script>

<div class="card not-prose flex-1 bg-base-200 mr-4 mb-4">
	<div class="card-body">
		<a class="card-title flex flex-row items-center" href={link}>
			<h4>{title}</h4>
			<Icon name="chevron_right"/>
		</a>
		<p class="prose">
			{description}
		</p>
	</div>
</div>
