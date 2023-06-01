<template>
	<div :class="['project-list-component', 'list-styles']">
		<div class="project-list-header">
			<h1 class="lined-paper">Projects</h1>
			<div class="lined-space lined-paper"> - </div>
		</div>
		<ul class="semantic-list">
			<li class="list-item" v-for="(project, index) in projects" :key="index">
				<Project :project="project"/>
			</li>
		</ul>
		<div class="lined-paper-filler"></div>
	</div>
</template>

<script>
import Project from "@/components/game/Project";

export default {
	name: 'ProjectList',
	components: {
		Project,
	},
};
</script>

<style lang="scss" scoped>
	.project-list-header {
		display: none;

		@include desktop {
			display: block;
			position: relative;
			font-family: $heading-font;
			text-transform: uppercase;
			text-align: center;

			.lined-paper:first-child {
				&:after {
					content: '';
					position: absolute;
					left: 25px;
					top: 0;
					bottom: 0;
					margin: auto;
					background-image: url('~@/assets/images/project-sticker.png');
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
					width: 100px;
					height: 100px;
				}
			}
		}
	}
</style>
