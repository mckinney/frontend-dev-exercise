<template>
	<div :class="['notebook-component']">
		<transition name="fade">
			<router-view name="notebook" />
		</transition>
		<TaskPlanner />
	</div>
</template>

<script>
import TaskPlanner from "@/components/game/TaskPlanner";

export default {
	name: 'Notebook',
	components: {
		TaskPlanner,
	},
};
</script>

<style lang="scss" scoped>
	.notebook-component {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: $z-bottom;

		@include desktop {
			align-self: flex-end;
			width: 650px;
			height: 90vh;
			z-index: $z-mid;
			min-height: 600px;
			box-shadow: 4px 2px 1px 0px $dark-primary;

			&:after {
				content: '';
				position: absolute;
				left: -42px;
				top: 40px;
				min-height: 1000px;
				height: 100%;
				width: 80px;
				background-image: url('~@/assets/images/notebook-spirals.svg');
				background-repeat: repeat-y;
				z-index: $z-mid;
			}

			&.game-over { box-shadow: 4px 22px 1px 0px $dark-primary; }
		}

		@include desktop-sm { width: 575px; }
	}

	.task-planner-component {
		position: absolute;
		top: 0;
		z-index: $z-bottom;
	}
</style>
