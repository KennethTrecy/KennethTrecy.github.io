<script lang="ts">
	export let itemprop: "name"|"description"
</script>

<span itemprop="item" itemscope itemtype="https://schema.org/Thing">
	<span {itemprop}><slot></slot></span>
</span>
