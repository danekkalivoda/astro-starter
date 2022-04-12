module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
	},
	plugins: [],
  corePlugins: {
    container: false
  }
};
