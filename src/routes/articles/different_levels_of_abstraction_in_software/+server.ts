export async function GET() {
	return new Response(
		"Renamed the title",
		{
			"headers": {
				"Location": "/articles/different_levels_of_abstraction_in_programming"
			},
			"status": 301
		}
	)
}
