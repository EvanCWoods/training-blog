const blogService = {
	getBlogs: async () => {
		const response = await fetch("/api/getBlogs", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		if (response.status !== 200) throw Error(data.message);
		return data;
	},
};

export default blogService;
