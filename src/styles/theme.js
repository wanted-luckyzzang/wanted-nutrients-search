const color = {
  default: '#000000',
  white: '#ffffff',
  borderGrey: '#f8f8f8',
  textGrey: '#8e8e8e',
};

const flex = {
  center: `
		display: flex;
		justify-content: center;
		align-items: center;
	`,
  column: `
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
  hCenter: `
		display: flex;
		justify-content: center;
	`,
};

export const theme = {
  color,
  flex,
};
