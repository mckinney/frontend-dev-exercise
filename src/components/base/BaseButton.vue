<template>
	<div :class="['btn', { disabled }]" @click="doAction" @keyup.enter="doAction" role="button">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		doAction() {
			if (!this.disabled) {
				this.$emit("action");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
	.btn {
		display: block;
		padding: 1em 2.2em;

		font-family: $body-font;
		font-size: $font-size-lg;
		font-weight: $font-weight-bold;
		letter-spacing: $letter-spacing-plus;
		text-transform: uppercase;
		text-align: center;
		line-height: 1;

		border-width: 5px;
		border-style: solid;
		border-color: white;
		border-radius: 100em;
		transition: all $ui-transition-duration;
		user-select: none;
		color: white;

		&:focus,
		&:active,
		&:hover {
			cursor: pointer;
			outline: none;
		}

		&.disabled {
			color: lighten($primary-color-dark, 30%);
			background: $primary-color-dark;
			cursor: not-allowed;

			&:hover { color: lighten($primary-color-dark, 30%); }
		}

		&.close-btn {
			height: 25px;
			width: 25px;
			padding: 10px;
			border: none;
			background-image: url('~@/assets/images/icons/close.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			z-index: $z-top;

			@include desktop { padding: 20px; }
		}
	}
</style>
