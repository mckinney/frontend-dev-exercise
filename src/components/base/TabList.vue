<template>
	<div class="tab-list-component">
		<ul class="tab-head-list">
			<li
				:class="['tab-label', {'active': activeTab === tab }]"
				v-for="(tab, index) in tabs"
				:key="index"
				@click="selectTab(tab)"
			>
				<slot name="tab-label" v-bind="tab"></slot>
			</li>
		</ul>
		<div class="card-body">
			<slot name="tab-body" v-bind="activeTab"></slot>
		</div>
  </div>
</template>

<script>
export default {
	name: 'TabList',
	props: {
		tabs: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			activeTab: this.tabs[0],
		};
	},
	methods: {
		selectTab(tab) {
			// code goes here
		},
	},
};
</script>

<style lang="scss" scoped>
	.card-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.tab-head-list {
		@include semantic-list;
		display: flex;
		align-items: flex-start;
		font-family: $body-font;
		color: white;
		font-size: $font-size-xl;
		letter-spacing: $letter-spacing-plus;

		@include desktop { font-size: $font-size-lg; }
	}

	.tab-label {
		width: 50%;
		padding: 0.5em 1em;
		text-transform: uppercase;
		text-align: center;

		&:hover { cursor: pointer; }
	}

	.card-body {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
