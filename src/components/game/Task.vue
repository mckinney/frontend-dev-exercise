<template>
	<div :class="['task-component', 'lined-paper']" @click="taskClick()">
		<div :class="['title']">{{ task.title }}</div>
	</div>
</template>

<script>

export default {
	name: 'Task',
	props: {
		task: {
			type: Object,
			required: true,
		},
	},
	methods: {
		taskClick() {
			alert('task clicked!');
		}
	},
};
</script>

<style lang="scss" scoped>
	.task-component {
		position: relative;
		transition: all $ui-transition-duration;
		font-size: $font-size-xl;

		@include desktop {
			font-size: $font-size-lg;
			white-space: nowrap;
			overflow: visible;
			text-overflow: ellipsis;
		}
	}

	.inactive,
	.completed { pointer-events: none; }

	.title {
		&.inactive {
			opacity: 0.5;
		}

		&.completed {
			text-decoration: line-through;
			background: $highlight-primary;

			.project-task & { background: $highlight-secondary; }
		}
	}
</style>
