ISPROTEC Assistência - Frontend (React + Vite + Tailwind)
========================================================

Conteúdo deste pacote:
- frontend/ (código fonte)
- public/logo.png (logo fornecida por você)
- README com instruções rápidas

Objetivo:
Este é um scaffold mínimo do frontend pronto para ser conectado ao Supabase.
Ele foi criado para facilitar o deploy gratuito em Vercel e integração com Supabase.

Passos rápidos para usar (sem programar):
1) Criar conta gratuita no Supabase: https://supabase.com
   - Crie um novo projeto e anote URL e API KEY (SERVICE_ROLE not needed here).
   - No painel SQL do Supabase rode o arquivo SQL que eu te entreguei (schema).

2) Criar conta gratuita no Vercel: https://vercel.com
   - Crie um novo projeto e faça upload deste diretório (ou conecte ao GitHub).
   - Nas configurações do projeto no Vercel, adicione as variáveis de ambiente (Settings > Environment Variables):
     - VITE_SUPABASE_URL = <sua supabase url>
     - VITE_SUPABASE_ANON_KEY = <sua anon public key>

3) Deploy:
   - No Vercel clique "Deploy" e aguarde. O site ficará disponível em um domínio vercel.app.
   - Para desenvolvimento local:
     - Instale Node.js (recomendado v18).
     - Rode: npm install
     - Rode: npm run dev
     - Abra http://localhost:5173

Arquivos importantes:
- src/ : código react
- public/logo.png : sua logo (já incluída)
- .env.example : exemplo de variáveis de ambiente

Observações:
- A geração de PDF das OS é feita no navegador (não precisa de servidor extra).
- O frontend já tem integração básica com Supabase Auth e exemplos de chamadas.
- Se quiser, eu também gero o backend/Supabase project com instruções passo-a-passo.

Se quiser, eu já subo tudo num repositório GitHub e te mostro o deploy automático no Vercel.