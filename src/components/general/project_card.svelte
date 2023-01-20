<script lang="ts">
	import Icon from "@/components/general/icon.svelte"

	export let title: string
	export let description: string
	export let link: string
</script>

<div class="card bg-base-200">
	<div class="card-body">
		<h4 class="card-title prose">{title}</h4>
		<p class="prose">
			{description}
		</p>
		<div class="card-actions">
			<a
				href={link}
				class="flex flex-row flex-nowrap items-center justify-end">
				<span>Visit</span><Icon name="chevron_right"/>
			</a>
		</div>
	</div>
</div>
