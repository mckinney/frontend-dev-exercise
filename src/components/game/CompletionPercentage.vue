<template>
	<div class="completion-percentage-component" v-if="project">
		<div>{{ percentCompleted }} complete</div>
	</div>
</template>

<script>
import { percentFormatter } from "@/lib/formatters";

export default {
	name: 'CompletionPercentage',
	props: {
		project: {
			type: Object,
			required: false,
		},
		nPlusOne: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		maybeAddOne() {
			return this.nPlusOne ? 1 : 0;
		},
		percentCompleted() {
			let amountCompleted;

			if (this.project.id !== this.active?.id && !this.project.completed) {
				amountCompleted = '0%';
			} else if (this.project.id === this.active?.id) {
				const fraction = (this.completedTasks.length + this.maybeAddOne) / this.totalTasks.length;
				amountCompleted = percentFormatter(fraction);
			} else if (this.project.completed) {
				amountCompleted = '100%';
			}

			return amountCompleted;
		},
	},
};
</script>

<style lang="scss" scoped>
	.completion-percentage-component {
		font-family: $heading-font;
		text-transform: uppercase;
	}
</style>
