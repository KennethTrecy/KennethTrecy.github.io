<script lang="ts">
	export let name: string

	let otherClasses: string[] = []

	export { otherClasses as class }

	$: joinedClasses = [
		"material-symbols-outlined",
		...otherClasses
	].join(" ")
</script>

<span class={joinedClasses}>{name}</span>
