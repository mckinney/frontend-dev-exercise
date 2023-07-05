<template>
	<div class="dashboard-component">
		<Notebook />
	</div>
</template>

<script>
import Notebook from "@/components/game/Notebook";

export default {
	name: 'Dashboard',
	components: {
		Notebook,
	},
};
</script>

<style lang="scss" scoped>
	.dashboard-component {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		@include desktop {
			position: relative;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding-top: 100px;
			background-image: url('~@/assets/images/backgrounds/desk-image-1.png');
			background-repeat: no-repeat;
			background-size: 450px;
			background-position: 100px 0;
			z-index: -1;
		}

		@include desktop-sm {
			padding-top: 0;
			min-height: 650px;
			background-size: 325px;
		}
	}
</style>
