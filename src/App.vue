<template>
	<AppScreen :scrollDefault="false">
		<Dashboard />
	</AppScreen>
</template>

<script>
import AppScreen from '@/components/partials/AppScreen';
import Dashboard from '@/components/Dashboard';

export default {
	name: 'App',
	components: {
		AppScreen,
		Dashboard,
	},
};
</script>

<style lang="scss">
	@import '../static/bootstrap-reboot.min.css';
	@import 'assets/styles/utilities/**/*.scss';

	html, body {
		height: 100%;
		font-family: $body-font;
		font-size: 20px;
		color: $dark-primary;
		background: $main-1;

		@include mobile {
			font-size: 14px;
		}
	}

	#app {
		height: 100%;

		@include desktop { min-height: $screen-desktop-height-min; }
	}
</style>
