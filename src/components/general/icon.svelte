<script lang="ts">
	export let name: string

	let otherClasses: string = ""

	export { otherClasses as class }

	$: joinedClasses = [
		"material-symbols-outlined",
		otherClasses
	].filter(Boolean).join(" ")
</script>

<span class={joinedClasses}>{name}</span>
