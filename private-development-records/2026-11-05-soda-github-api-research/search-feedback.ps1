# Firecrawl skill requests public search-quality feedback after source review.
# Send only public repository-search topics; no project, account or device data.
if ($env:FIRECRAWL_NO_SEARCH_FEEDBACK -eq '1') { return }
$feedbackResults = @()
foreach ($searchFile in Get-ChildItem -LiteralPath (Join-Path $PSScriptRoot '.firecrawl') -Filter 'search-*.json') {
    $searchResult = Get-Content -LiteralPath $searchFile.FullName -Raw | ConvertFrom-Json
    if (-not $searchResult.id) { continue }
    $rating = if ($searchFile.Name -match 'soda-phone.json|soda-effects') { 'partial' } else { 'good' }
    $feedbackArguments = @(
        'search-feedback', [string]$searchResult.id,
        '--rating', $rating,
        '--missing-content', 'Standalone Soda Music mobile phone login rather than QR secondary SMS verification; official DSP integration API',
        '--query-suggestions', 'Prioritize implemented repository source, distinguish QR MFA from initial phone login, and include current Android Soda clients.',
        '--silent'
    )
    & firecrawl @feedbackArguments
    $feedbackResults += [ordered]@{ file=$searchFile.Name; searchId=$searchResult.id; rating=$rating; exitCode=$LASTEXITCODE }
}
$feedbackResults | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $PSScriptRoot 'search-feedback-results.json') -Encoding utf8
Write-Output ('feedback_count=' + $feedbackResults.Count)
