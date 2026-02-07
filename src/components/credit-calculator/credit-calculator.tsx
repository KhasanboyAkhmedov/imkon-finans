import { useMemo, useState } from "react";
import { Slider, ConfigProvider } from "antd";
import './credit-calculator.css';

function formatSum(value: number) {
  return new Intl.NumberFormat("uz-UZ").format(Math.round(value)) + " so'm";
}

export default function CreditCalculator({ onSwitch }: {onSwitch: () => void;}) {
  const [summa, setSumma] = useState(42000000);
  const [muddat, setMuddat] = useState(24);
  const [stavka, setStavka] = useState(48);
  const [tur, setTur] = useState("annuitet");

  const hisob = useMemo(() => {
    const P = Number(summa);
    const n = Number(muddat);
    const r = Number(stavka) / 100 / 12;

    let oylikTolov = 0;
    let jamiTolov = 0;

    if (tur === "annuitet") {
      const A = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      oylikTolov = A;
      jamiTolov = A * n;
    } else {
      const asosiy = P / n;
      let qolgan = P;
      let total = 0;
      for (let i = 0; i < n; i++) {
        const foiz = qolgan * r;
        total += (asosiy + foiz);
        qolgan -= asosiy;
        if (i === 0) oylikTolov = asosiy + foiz;
      }
      jamiTolov = total;
    }

    return { oylikTolov, jamiTolov };
  }, [summa, muddat, stavka, tur]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff3e41',
        },
      }}
    >
      <div className="calc-wrapper">
        <div className="calc-container">
          <div className="calc-inputs">
            <h2 className="calc-title">Kredit Kalkulyatori</h2>

            <div className="input-group">
              <div className="label-row">
                <label>Kredit summasi</label>
                <span className="value-badge">{formatSum(summa)}</span>
              </div>
              <Slider
                min={4000000}
                max={100000000}
                step={500000}
                value={summa}
                onChange={(val) => setSumma(val)}
                dots={false}
                tooltip={{ open: false }}
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Kredit muddati</label>
                <span className="value-badge">{muddat} oy</span>
              </div>
              <Slider
                min={1}
                max={48}
                value={muddat}
                onChange={(val) => setMuddat(val)}
                dots={false}
                tooltip={{ open: false }}
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Yillik foiz stavkasi</label>
                <span className="value-badge">{stavka} %</span>
              </div>
              <Slider
                min={26}
                max={56}
                step={0.1}
                value={stavka}
                onChange={(val) => setStavka(val)}
                dots={false}
                tooltip={{ open: false }}
              />
            </div>

            <div className="input-group">
              <label className="font-semibold block mb-3">Hisoblash turi</label>
              <div className="radio-group">
                <label className={`radio-label ${tur === 'annuitet' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    checked={tur === "annuitet"}
                    onChange={() => setTur("annuitet")}
                  />
                  Annuitet
                </label>
                <label className={`radio-label ${tur === 'differensial' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    checked={tur === "differensial"}
                    onChange={() => setTur("differensial")}
                  />
                  Differensial
                </label>
              </div>
            </div>
          </div>

          <div className="calc-results">
            <div className="result-item">
              <span className="result-label">Oylik to‘lov</span>
              <span className="result-value primary">{formatSum(hisob.oylikTolov)}</span>
            </div>
            <hr className="calc-divider" />
            <div className="result-grid">
              <div className="result-item">
                <span className="result-label">Kredit summasi</span>
                <span className="result-value">{formatSum(summa)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Yillik foiz</span>
                <span className="result-value">{stavka} %</span>
              </div>
              <div className="result-item">
                <span className="result-label">To‘liq qiymati</span>
                <span className="result-value">{formatSum(hisob.jamiTolov)}</span>
              </div>
            </div>
            <button onClick={onSwitch} className="apply-button">ARIZA QOLDIRISH</button>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}