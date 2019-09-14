#/bin/sh

# # Busca código mais recente
git fetch origin master

# Hard reset
git reset --hard origin/master

# Force pull
git pull origin master --force

# Cria pasta para arquivos temporarios
mkdir temp

# Atualiza o projeto
refresh
