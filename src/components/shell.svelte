<script lang="ts">
	import "agnostic-svelte/css/common.min.css"
	import {
		Header,
		HeaderNav,
		HeaderNavItem
	} from "agnostic-svelte"
</script>

<Header>
	<p slot="logoleft">
		KennethTrecy
	</p>
	<HeaderNav>
		<HeaderNavItem>
			<a href="/">Home</a>
		</HeaderNavItem>
	</HeaderNav>
</Header>
<main>
	<slot name="main"></slot>
</main>
<footer>

</footer>
