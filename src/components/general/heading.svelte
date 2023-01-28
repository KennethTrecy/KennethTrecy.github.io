<script lang="ts">
	let otherClasses: string = ""

	export { otherClasses as class }
</script>

<h1
	class={[ "prose md:prose-lg", otherClasses ].filter(Boolean).join(" ")}
	itemprop="headline name">
	<span class="text-5xl">
		<slot></slot>
	</span>
</h1>
