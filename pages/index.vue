<script setup>
const { data } = await useFetch(
	"https://portfolio-farruxbeknozimov.vercel.app/api/socials"
);
console.log(data.value);
</script>

<template>
	<div>
		<div class="w-full flex items-center justify-evenly py-10">
			<div class="md:w-[50%] w-full mb-5 text-white">
				<h1 class="text-5xl my-4">
					Hi, I am <span class="text-cyan-500">Farruxbek</span>
				</h1>
				<h3 class="text-3xl text-cyan-500">Software Engineer</h3>
				<p class="text-lg text-gray-400 mb-5 w-[80%]">
					Hello, I am FullStack Software Engineer. I love coding.
				</p>
				<div class="w-full flex gap-3 mb-5">
					<a
						v-for="el in data"
						target="_blank"
						:href="el.link"
						class="p-2 rounded-full flex items-center justify-center bg-slate-700 hover:bg-slate-500">
						<Icon :name="el.icon" class="block text-white" />
					</a>
				</div>
				<button class="bg-cyan-500 px-5 py-2 rounded-lg">Download CV</button>
			</div>
			<div class="hidden md:block md:w-[50%] relative">
				<img
					src="https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png"
					alt=""
					class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 p-2 border-cyan-500 mx-auto object-cover rounded-full" />
			</div>
		</div>
	</div>
</template>
