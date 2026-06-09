import pandas as pd
import json

# 1. Carregar os arquivos originais
arquivo_dados = 'squad_info_all_EA FC.xlsx'
arquivo_times = 'Lista times.xlsx'

print("📊 Carregando tabelas Excel...")
df_jogadores = pd.read_excel(arquivo_dados, sheet_name=0)
df_clubes_lista = pd.read_excel(arquivo_times, sheet_name=0)

# Identifica as colunas de Nome e Divisão na sua planilha
col_nome = df_clubes_lista.columns[0]
col_div = df_clubes_lista.columns[1]

# AUTOMATIZAÇÃO DA ORDEM: Separa e ordena cada divisão de forma alfabética perfeita
times_serie_a = df_clubes_lista[df_clubes_lista[col_div].astype(str).str.contains('1')].copy()
times_serie_a = times_serie_a.sort_values(by=col_nome)

times_serie_b = df_clubes_lista[df_clubes_lista[col_div].astype(str).str.contains('2')].copy()
times_serie_b = times_serie_b.sort_values(by=col_nome)

# Une os blocos na sequência exata que o Álbum espera: Série A primeiro, Série B depois
df_clubes_ordenado = pd.concat([times_serie_a, times_serie_b])
clubes_album = df_clubes_ordenado[col_nome].dropna().astype(str).str.strip().tolist()

print(f"✅ Organizados {len(clubes_album)} clubes. Estrutura alinhada (Série A ➔ Série B).")

df_jogadores['teamname_clean'] = df_jogadores['teamname'].astype(str).str.strip()
df_jogadores = df_jogadores[df_jogadores['playerid'] < 270000] # Remove futebol feminino

banco_figurinhas_final = {}

print("⚙️ Cruzando jogadores com correspondência exata de nomes...")

for clube in clubes_album:
    # Casamento cirúrgico e exato de strings
    df_clube = df_jogadores[df_jogadores['teamname_clean'] == clube].copy()
        
    if df_clube.empty:
        print(f"⚠️ Alerta: O time [{clube}] não retornou jogadores!")
        banco_figurinhas_final[clube] = []
        continue

    # Regra de corte por maior Overall Rating
    df_clube = df_clube.sort_values(by='overallrating', ascending=False)
    df_gks = df_clube[df_clube['Position'] == 'GK']
    df_linha = df_clube[df_clube['Position'] != 'GK']
    
    elenco_19 = []
    if not df_gks.empty:
        gk_titular = df_gks.iloc[0]
        elenco_19.append(gk_titular)
        df_gks = df_gks.iloc[1:]
        
    titulares_linha = df_linha.head(10)
    for _, p in titulares_linha.iterrows():
        elenco_19.append(p)
    df_linha = df_linha.iloc[10:]
    
    if not df_gks.empty:
        gk_reserva = df_gks.iloc[0]
        elenco_19.append(gk_reserva)
        df_gks = df_gks.iloc[1:]
        
    sobras = pd.concat([df_linha, df_gks]).sort_values(by='overallrating', ascending=False)
    vagas_restantes = 19 - len(elenco_19)
    
    if vagas_restantes > 0 and not sobras.empty:
        for _, p in sobras.head(vagas_restantes).iterrows():
            elenco_19.append(p)

    jogadores_formatados = []
    for p in elenco_19:
        pac = int(((p['acceleration'] if pd.notna(p['acceleration']) else 70) + (p['sprintspeed'] if pd.notna(p['sprintspeed']) else 70)) / 2)
        sho = int(((p['finishing'] if pd.notna(p['finishing']) else 65) + (p['shotpower'] if pd.notna(p['shotpower']) else 65) + (p['longshots'] if pd.notna(p['longshots']) else 65)) / 3)
        pas = int(((p['shortpassing'] if pd.notna(p['shortpassing']) else 65) + (p['longpassing'] if pd.notna(p['longpassing']) else 65) + (p['crossing'] if pd.notna(p['crossing']) else 65)) / 3)
        dri = int(((p['dribbling'] if pd.notna(p['dribbling']) else 70) + (p['ballcontrol'] if pd.notna(p['ballcontrol']) else 70)) / 2)
        def_attr = int(((p['standingtackle'] if pd.notna(p['standingtackle']) else 40) + (p['slidingtackle'] if pd.notna(p['slidingtackle']) else 40) + (p['defensiveawareness'] if pd.notna(p['defensiveawareness']) else 40)) / 3)
        phy = int(((p['strength'] if pd.notna(p['strength']) else 65) + (p['stamina'] if pd.notna(p['stamina']) else 65) + (p['jumping'] if pd.notna(p['jumping']) else 65)) / 3)

        altura = f"{(p['height']/100):.2f}m" if pd.notna(p['height']) and p['height'] > 100 else "1.80m"
        peso = f"{int(p['weight'])}kg" if pd.notna(p['weight']) else "75kg"
        
        nascimento = "01/01/2000"
        if pd.notna(p['birthdate']):
            try:
                nascimento = pd.to_datetime(p['birthdate']).strftime('%d/%m/%Y')
            except:
                nascimento = str(p['birthdate']).split()[0]

        jogadores_formatados.append({
            "playerid": str(int(p['playerid'])),
            "nome": str(p['commonname'] if pd.notna(p['commonname']) else p['lastname']).upper(),
            "pos": str(p['Position']),
            "pac": pac,
            "sho": sho,
            "pas": pas,
            "dri": dri,
            "def": def_attr,
            "phy": phy,
            "height": altura,
            "weight": peso,
            "birthdate": nascimento
        })
        
    banco_figurinhas_final[clube] = jogadores_formatados
    print(f"🔹 {clube}: {len(jogadores_formatados)} atletas indexados.")

conteudo_js = "const bancoFigurinhas = " + json.dumps(banco_figurinhas_final, indent=2, ensure_ascii=False) + ";"
with open('jogadores.js', 'w', encoding='utf-8') as f:
    f.write(conteudo_js)

print("\n✅ ARQUIVO 'jogadores.js' ATUALIZADO COM SUCESSO TOTAL!")