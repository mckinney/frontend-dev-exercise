<template>
	<div :class="['pill-button-component', { disabled }]">
		<BaseButton v-bind="$attrs" @action="action">
			<slot></slot>
		</BaseButton>
		<div class="shadow" />
	</div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";

export default {
	name: 'PillButton',
	components: {
		BaseButton,
	},
	props: {
		action: {
			type: Function,
			required: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
	.pill-button-component {
		position: relative;
		pointer-events: auto;
		width: max-content;
		max-width: 38ch;
		margin-top: 1rem;
	}

	.btn {
		position: relative;
		display: inline-block;
		border-width: 3px;
		transform: rotate(-1.5deg);
		padding: .75em 1.4em;
		max-height: 32ch;
		z-index: $z-mid;

		@include desktop {
			border-width: 4px;
			padding: 1em 2.2em;
		}

		@include desktop { padding: .8em 1.8em; }

		&:focus,
		&:active,
		&:hover {
			transform: rotate(0);

			+ .shadow {
				width: 100%;
				transform: rotate(0);
			}
		}

		&:active {
			transform: scale(.95);

			+ .shadow { transform: scale(.95); }
		}

		.disabled & {
			pointer-events: none;
			opacity: 0.5;
		}
	}

	.shadow {
		@include absolute;
		content: '';
		width: 90%;
		height: 100%;
		transform: rotate(1.5deg);
		color: $highlight-primary;
		background: $highlight-primary;
		transition: all $ui-transition-duration;
		border-radius: 100em;
		z-index: $z-bottom;

		.disabled & { opacity: 0.5; }
	}
</style>
