<template>
	<div :class="['task-list-component', 'list-styles']">
		<div class="task-list-header">
			<h1 class="lined-paper to-do-header">To-Do List</h1>
			<div class="task-tracker lined-paper">
				<span>{{ currentTask }}</span> of <span>{{ totalTasks }}</span> tasks completed
			</div>
			<div class="lined-space lined-paper show-desktop"> - </div>
		</div>
		<ul class="semantic-list">
			<li class="list-item active" v-for="(task, index) in tasks" :key="index">
				<Task :task="task"/>
			</li>
			<div class="lined-space lined-paper"> - </div>
		</ul>
		<div class="lined-paper-filler"></div>
	</div>
</template>

<script>
import Task from "@/components/game/Task";

export default {
	name: 'TaskList',
	components: {
		Task,
	},
	data () {
		return {
			currentTask: 0,
			totalTasks: 2,
			tasks: [
				{
					"title": "Create content for Bosco's Restaurant",
					"status": "active",
					"projectId": 1,
				},
				{
					"title": "File for LLC",
					"status": "completed",
					"projectId": 1,
				}
			]
		}
	},
};
</script>

<style lang="scss" scoped>
	.task-list-header {
		position: relative;
		font-family: $heading-font;
		text-transform: uppercase;
		text-align: center;

		@include desktop {
			.lined-paper:first-child {
				&:after {
					content: '';
					position: absolute;
					left: 25px;
					top: 0;
					bottom: 0;
					margin: auto;
					background-image: url('~@/assets/images/to-do-sticker.png');
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
					width: 50px;
					height: 50px;
				}
			}
		}

		.to-do-header {
			display: none;
			margin: 0;

			@include desktop { display: block; }
		}
	}

	.task-tracker {
		font-size: $font-size-xxl;

		@include desktop { font-size: $font-size-lg; }

		span { color: $highlight-primary; }
	}

	.semantic-list:hover { cursor: pointer; }
</style>
