<script lang="ts">
	export let label: string
</script>

<span itemprop="item" itemscope itemtype="https://schema.org/Thing">
	<strong itemprop="name">{label}</strong>.
	<span itemprop="description"><slot></slot></span>
</span>
