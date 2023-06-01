<template>
  <Dashboard />
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
	@import '../static/bootstrap-reboot.min.css';
	@import 'assets/styles/utilities/**/*.scss';

	html, body {
		height: 100%;
		font-family: $body-font;
		font-size: 20px;
		color: $dark-primary;
		background: var(--main-color);

		@include mobile {
			font-size: 14px;
			background: $dark-primary;
		}
	}

	#app {
		height: 100%;

		@include desktop { min-height: $screen-desktop-height-min; }
	}
</style>