import random
import string

def gerar_codigo_unico_fcm(qtd_creditos):
    # 1. Gera 5 letras aleatórias para o cupom ser exclusivo
    letras_aleatorias = ''.join(random.choices(string.ascii_uppercase, k=5))
    
    # 2. Criptografa a quantidade de créditos (soma 17 para disfarçar o número real)
    credito_mascarado = str(qtd_creditos + 17).zfill(2)
    
    # Bloco interno que o algoritmo do álbum vai ler e validar
    bloco_validacao = f"{letras_aleatorias}{credito_mascarado}".lower()
    
    # 3. Calcula a assinatura digital matemática de segurança
    soma_token = 0
    for i in range(len(bloco_validacao)):
        soma_token += ord(bloco_validacao[i]) * (i + 1)
    hash_calculado = str((soma_token * 37) % 8999 + 1000)
    
    # 4. Monta o cupom final imponente de 5 blocos
    return f"FCM26-SLP-{letras_aleatorias}-{credito_mascarado}-{hash_calculado}"

# ==========================================
# SISTEMA INTERATIVO DO ADMINISTRADOR (ROBERTO)
# ==========================================
if __name__ == "__main__":
    print("\n=============================================")
    print("      GERADOR DE TICKETS - SIGA LA PELOTA    ")
    print("=============================================")
    print("👉 Para fechar o programa, digite 'sair' ou '0'.")
    
    while True:
        print("\n---------------------------------------------")
        try:
            resposta = input("Digite a quantidade de pacotes para gerar: ").strip().lower()
            
            # Condição de saída para fechar o prompt de comando de forma limpa
            if resposta == 'sair' or resposta == '0':
                print("\nEncerrando o gerador... Até a próxima!")
                break
                
            quantidade = int(resposta)
            
            if quantidade <= 0:
                print("\n❌ Digite um número maior que zero!")
            else:
                codigo_final = gerar_codigo_unico_fcm(quantidade)
                print("\n✅ CÓDIGO GERADO COM SUCESSO!")
                print(f"Cupom: \033[1;32m{codigo_final}\033[0m")
                print(f"Premiação: Este código vai dar exatamente +{quantidade} Tickets no álbum.")
                print("(Lembrando: cada usuário só poderá usar este cupom uma única vez no mesmo PC)")
                
        except ValueError:
            print("\n❌ Erro: Digite um número inteiro válido ou a palavra 'sair'!")

    # Mantém uma pausa final sutil apenas no momento da saída real
    input("\nPressione ENTER para fechar a janela definitivamente...")