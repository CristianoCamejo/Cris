<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Promoção de Natal</title>

<style>
    #promoNatalOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 99999;
    }

    #promoNatalPopup {
        background: white;
        width: 90%;
        max-width: 420px;
        border-radius: 14px;
        padding: 22px;
        text-align: center;
        animation: fadeIn 0.35s ease;
        box-shadow: 0 0 22px rgba(0,0,0,0.25);
    }

    #promoNatalPopup h2 {
        margin-top: 0;
        font-size: 26px;
        color: #d62828;
        font-weight: bold;
    }

    #promoNatalPopup p {
        font-size: 18px;
        margin: 10px 0;
    }

    #promoNatalPopup .valor {
        font-size: 20px;
        font-weight: bold;
        color: #2a9d8f;
    }

    #promoNatalFechar {
        margin-top: 20px;
        background: #d62828;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        transition: 0.3s;
    }

    #promoNatalFechar:hover {
        background: #b71c1c;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
</style>
</head>

<body>

<div id="promoNatalOverlay">
    <div id="promoNatalPopup">
        <h2>🎄 Promoção de Natal 🎄</h2>

        <p>Uma aula: <span class="valor">R$ 120</span></p>

        <p>Mensal (1h30 cada):  
            <span class="valor">R$ 360</span><br>
            <small>(R$ 90 por aula)</small>
        </p>

        <p>Trimestre (1h30 cada):  
            <span class="valor">R$ 720</span><br>
            <small>(R$ 240/mês = R$ 60 por aula)</small>
        </p>

        <p>Semestre (1h30 cada):  
            <span class="valor">R$ 1200</span><br>
            <small>(R$ 200/mês = R$ 50 por aula)</small>
        </p>

        <p><strong>Válido até 31/12/2025<br>ou enquanto houver vagas!</strong></p>

        <button id="promoNatalFechar">Fechar</button>
    </div>
</div>

<script>
    function abrirPromoNatal() {
        document.getElementById("promoNatalOverlay").style.display = "flex";
    }

    function fecharPromoNatal() {
        document.getElementById("promoNatalOverlay").style.display = "none";
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("promoNatalFechar").onclick = fecharPromoNatal;

        document.getElementById("promoNatalOverlay").onclick = function (e) {
            if (e.target.id === "promoNatalOverlay") fecharPromoNatal();
        };
    });

    // Abre automaticamente quando carregado pelo index
    window.onload = abrirPromoNatal;
</script>

</body>
</html>
