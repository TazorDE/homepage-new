<script>
	import DescriptionListItem from './DescriptionListItem.svelte';
	import CarrerBulletPoint from './CarrerBulletPoint.svelte';
</script>

<CarrerBulletPoint
	time="September 2019 - October 2022"
	position="Dual Student"
	company="IBM Deutschland GmbH"
>
	<dl class="list-dl">
		<DescriptionListItem>
			<span slot="title">October - November 2019: IBM Cloud Functions</span>
			During my first internship at the IBM Laboratory in Böblingen, I familiarized myself with working
			in a team using modern project management practices, Git and started familiarizing myself with
			JavaScript and Cloud Functions.
		</DescriptionListItem>
		<DescriptionListItem>
			<span slot="title">March - May 2020: IBM CIO Analytic Solutions</span>
			Applying my knowledge from the first internship, as well as my first semester at the DHBW, I was
			able to build a IBM Cloud Functions based prototype for an application to automate the process
			of renewing passwords of IBM Db2 databases.
		</DescriptionListItem>
		<DescriptionListItem>
			<span slot="title">November 2020 - March 2021: IBM Watson Studio</span>
			Preparing a scientific overview on HTML templating engines for NodeJS to be used in the following
			internship.
		</DescriptionListItem>
		<DescriptionListItem>
			<span slot="title">June - September 2021: IBM Watson Studio</span>
			Applying the findings from the previous internship, a NodeJS based prototype application was developed
			to allow users to create and manage custom code snippets for the IBM Watson Studio platform.
		</DescriptionListItem>
		<DescriptionListItem>
			<span slot="title">January - September 2022: IBM Code Engine Frontend</span>
			I joined the IBM Cloud Code Engine team as a frontend developer. My main tasks were to maintain
			and improve the existing ReactJS based frontend application, as well as to implement new data collection
			and analytics features for my bachelor thesis.
		</DescriptionListItem>
	</dl>
</CarrerBulletPoint>
