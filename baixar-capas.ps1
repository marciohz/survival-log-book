
$ErrorActionPreference = "Continue"

$destino = Join-Path $PSScriptRoot "public\docs"
New-Item -ItemType Directory -Path $destino -Force | Out-Null

$jogos = @(
    "Resident Evil",
    "Resident Evil 2",
    "Resident Evil 3",
    "Resident Evil 4",
    "Resident Evil 5",
    "Resident Evil 6",
    "Resident Evil 7 Biohazard",
    "Resident Evil Village",
    "Resident Evil 4 (2005)",
    "Resident Evil 2 (1998)",
    "Resident Evil 3 Nemesis",
    "Resident Evil Code Veronica",
    "Resident Evil Revelations",
    "Resident Evil Revelations 2",
    "Resident Evil 0",
    "Resident Evil Outbreak",
    "Resident Evil Outbreak File 2",
    "Resident Evil Operation Raccoon City",
    "Resident Evil Umbrella Chronicles",
    "Resident Evil Darkside Chronicles",
    "Resident Evil Survivor",
    "Resident Evil Dead Aim",
    "Resident Evil The Mercenaries 3D",
    "Resident Evil Gaiden",
    "Resident Evil Deadly Silence",
    "Resident Evil The Darkside Chronicles",
    "Resident Evil Resistance",
    "Resident Evil Re:Verse",
    "Resident Evil Umbrella Corps",
    "Resident Evil: The Missions",
    "Resident Evil: Degeneration",
    "Resident Evil: The Mercenaries",
    "Silent Hill",
    "Silent Hill 2",
    "Silent Hill 2 Remake",
    "Silent Hill 3",
    "Silent Hill 4 The Room",
    "Silent Hill Origins",
    "Silent Hill Homecoming",
    "Silent Hill Shattered Memories",
    "Silent Hill Downpour",
    "Silent Hill Book of Memories",
    "Silent Hill The Short Message",
    "Silent Hill f",
    "Silent Hill Ascension",
    "Silent Hill Arcade",
    "Silent Hill Orphan",
    "Silent Hill Orphan 2",
    "Silent Hill Orphan 3",
    "Silent Hill Play Novel",
    "Alien Isolation",
    "Alien Rogue Incursion",
    "Aliens Fireteam Elite",
    "Aliens Dark Descent",
    "Aliens Colonial Marines",
    "Alien Trilogy",
    "Alien Resurrection",
    "Alien vs Predator Classic",
    "Aliens vs Predator",
    "Alien Blackout",
    "Alien Infestation",
    "Dead by Daylight",
    "The Casting of Frank Stone",
    "Dead by Daylight Silent Hill",
    "Bloodborne",
    "Bloodborne The Old Hunters"
)

function Get-Slug([string]$texto) {
    $texto = $texto.ToLowerInvariant()
    $texto = $texto -replace '[^a-z0-9]+', '-'
    return $texto.Trim('-')
}

$baixados = 0
$falhas = @()

foreach ($jogo in $jogos) {
    $slug = Get-Slug $jogo
    $arquivo = Join-Path $destino "$slug.jpg"

    if (Test-Path $arquivo) {
        Write-Host "Já existe: $jogo" -ForegroundColor DarkGray
        continue
    }

    Write-Host "Procurando: $jogo" -ForegroundColor Cyan

    try {
        $busca = [uri]::EscapeDataString($jogo)
        $urlBusca = "https://store.steampowered.com/api/storesearch/?term=$busca&l=brazilian&cc=br"
        $resultado = Invoke-RestMethod -Uri $urlBusca -TimeoutSec 15

        if ($resultado.total -gt 0 -and $resultado.items.Count -gt 0) {
            $item = $resultado.items[0]
            $imagem = $item.tiny_image

            if (-not $imagem -and $item.id) {
                $imagem = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/$($item.id)/library_600x900.jpg"
            }

            if ($imagem) {
                Invoke-WebRequest -Uri $imagem -OutFile $arquivo -TimeoutSec 20
                if ((Test-Path $arquivo) -and (Get-Item $arquivo).Length -gt 1000) {
                    $baixados++
                    Write-Host "Baixado: $jogo" -ForegroundColor Green
                } else {
                    Remove-Item $arquivo -Force -ErrorAction SilentlyContinue
                    $falhas += $jogo
                }
            } else {
                $falhas += $jogo
            }
        } else {
            $falhas += $jogo
            Write-Host "Não encontrado: $jogo" -ForegroundColor Yellow
        }
    } catch {
        $falhas += $jogo
        Write-Host "Erro ao baixar: $jogo" -ForegroundColor Yellow
    }

    Start-Sleep -Milliseconds 250
}

$relatorio = Join-Path $destino "capas-nao-encontradas.txt"
$falhas | Set-Content -Path $relatorio -Encoding UTF8

Write-Host ""
Write-Host "Processo concluído." -ForegroundColor Green
Write-Host "Capas baixadas: $baixados"
Write-Host "Jogos sem capa: $($falhas.Count)"
Write-Host "Relatório: $relatorio"
Write-Host "Pasta de destino: $destino"
Read-Host "Pressione Enter para fechar"
