<template>
	<TabList class="notebook-component" :tabs="tabs">
		<template v-slot:tab-label="tab">
			<span>{{ tab.title }}</span>
		</template>
		<template v-slot:tab-body="tab">
			<keep-alive>
				<component :is="tab.component" />
			</keep-alive>
		</template>
	</TabList>
</template>

<script>
import ProjectList from "@/components/game/ProjectList";
import TabList from "@/components/base/TabList";
import TaskList from "@/components/game/TaskList";

export default {
	name: 'Notebook',
	components: {
		ProjectList,
		TabList,
		TaskList,
	},
	data() {
		return {
			tabs: [
				{ title: 'To-do list', component: 'TaskList' },
				{ title: 'Projects', component: 'ProjectList' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
	.notebook-component {
		width: 100%;
		height: 100%;
		padding-bottom: 20px;
		position: absolute;
		bottom: 0;
		z-index: $z-bottom;

		@include desktop {
			height: 100%;
			padding-bottom: 0;
			align-self: flex-end;
			width: 650px;
			height: 90vh;
			z-index: $z-mid;
			min-height: 600px;
			box-shadow: 4px 2px 1px 0px $dark-primary;

			::v-deep .tab-head-list {
				position: absolute;
				display: flex;
				justify-content: space-between;
				transform: rotate(90deg);
				right: -225px;
				top: 275px;
				width: 400px;
				z-index: $z-mid;
			}

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
		}

		::v-deep .tab-label {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			@include desktop { box-shadow: -3px 3px 1px 1px $dark-primary; }

			&.active {
				box-shadow: 0px 3px 0px 0px $dark-primary;

				@include desktop { box-shadow: -3px 3px 1px 1px $dark-primary; }

				&:after {
					content: '';
					position: absolute;
					width: 50%;
					height: 10px;
					top: 100%;
					margin: auto;
					box-shadow: 0px 3px 0px 0px $dark-primary;
					z-index: $z-bottom;
				}
			}

			@include desktop {
				transform: rotate(180deg);
				height: 50px;
				width: 45%;

				&.active {
					&:after {
						content: '';
						position: absolute;
						width: 50%;
						height: 20px;
						bottom: 100%;
						top: unset;
						margin: auto;
						box-shadow: -5px 1px 0px -1px $dark-primary;
						z-index: -1;
					}
				}
			}

			&:first-child,
			&:first-child:after { background: $highlight-primary; }
			&:last-child,
			&:last-child:after { background: $highlight-secondary; }
		}
	}
</style>
