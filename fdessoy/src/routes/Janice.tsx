// import { useEffect, useState } from 'react'

// const Janice = () => {
//     const [exchangeRate, setExchangeRate] = useState<number | null>(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//     const [usingCachedData, setUsingCachedData] = useState(false)

//     useEffect(() => {
        
//         const fetchExchangeRate = async () => {
//             try {
//                 setLoading(true)
//                 const cachedRate = localStorage.getItem('real_rate')
//                 const cachedTimestamp = localStorage.getItem('rate_timestamp')

//                 if (cachedTimestamp && cachedRate) {
//                     const cacheDate = new Date(parseInt(cachedTimestamp))
//                     const today = new Date()

//                     const isSameDay = cacheDate.toDateString() === today.toDateString()
//                     if (isSameDay) {
//                         setExchangeRate(parseFloat(cachedRate))
//                         setUsingCachedData(true)
//                         setError(null)
//                         return
//                     }
//                 }

//                 // API call that should be done only ONCE a day to avoid rate limiting
//                 setUsingCachedData(false)
//                 const response = await fetch('https://open.er-api.com/v6/latest/USD');
//                 const data = await response.json()
                
//                 // cache data with time stamp for later use (avoiding rate limiting from using ExchangeRate-API free service more than once a day)
//                 const timestamp = new Date().toString()
//                 localStorage.setItem('rate_timestamp', timestamp)
//                 localStorage.setItem('real_rate', data.rates.BRL.toString())
//                 localStorage.setItem('dollar_rate', data.rates.USD.toString())
                
//                 setExchangeRate(data.rates.BRL)
//                 setError(null)
//             } catch (error) {
//                 console.error("Error", error)
//                 setError("Problem fetching from API")
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchExchangeRate()
//     }, [])

//     return (
//         <div className="p-5">
//             <p className="text-2xl"><strong><u>PRIVACY NOTICE</u></strong></p>
//             This endpoint is for the sole purpose of helping my mother Janice with her needs to calculate exchange rates.
//             It uses ExchangeRate-API which is limited by one call per day. Whenever you use this endpoint, it will store
//             the results from ExchangeRate-API into your device local storage.
//             <div className="py-5" >
//                 {loading && <p>Loading exchange Rate....</p>}
//                 {error && <p className="text-red-500">Error: {error}</p>}
//                 {exchangeRate && (
//                     <div>
//                         <p>
//                           Current USD to BRL rate: {exchangeRate}
//                           {usingCachedData && (
//                             <p className="text-blue-600 text-sm">Using cached data from today</p>
//                           )}
//                         </p>
//                     </div>
//                     )}
//             </div>
//             <div className="px-2 py-5 border">
//                 <form onSubmit="handleConvert(event)">
//                     <input type="number" name="amount" placeholder="Valor" required />
//                     <div>
//                         <div>
//                             <select className="border px-5" name="de">
//                                 <option value="DOLLAR">DOLLAR</option>
//                                 <option value="REAL">REAL</option>
//                             </select>
//                             </div>
//                         <div>
//                             <select className="border px-5" name="para">
//                                 <option value="REAL">REAL</option>
//                                 <option value="DOLLAR">DOLLAR</option>
//                             </select>
//                             </div>
//                         <button type="submit">Converter</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Janice

import { useEffect, useState } from 'react'

const Janice = () => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [usingCachedData, setUsingCachedData] = useState(false)
    const [amount, setAmount] = useState('')
    const [conversionType, setConversionType] = useState('dollar-to-real')
    const [result, setResult] = useState<string | null>(null)

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                setLoading(true)
                const cachedRate = localStorage.getItem('real_rate')
                const cachedTimestamp = localStorage.getItem('rate_timestamp')

                if (cachedTimestamp && cachedRate) {
                    const cacheDate = new Date(parseInt(cachedTimestamp))
                    const today = new Date()

                    const isSameDay = cacheDate.toDateString() === today.toDateString()
                    if (isSameDay) {
                        setExchangeRate(parseFloat(cachedRate))
                        setUsingCachedData(true)
                        setError(null)
                        return
                    }
                }

                // API call that should be done only ONCE a day to avoid rate limiting
                setUsingCachedData(false)
                const response = await fetch('https://open.er-api.com/v6/latest/USD')
                const data = await response.json()
                
                const timestamp = Date.now().toString()
                localStorage.setItem('rate_timestamp', timestamp)
                localStorage.setItem('real_rate', data.rates.BRL.toString())
                localStorage.setItem('dollar_rate', data.rates.USD.toString())
                
                setExchangeRate(data.rates.BRL)
                setError(null)
            } catch (error) {
                console.error("Error", error)
                setError("Problema ao buscar taxa de câmbio")
            } finally {
                setLoading(false)
            }
        }
        fetchExchangeRate()
    }, [])

    const handleConvert = () => {
        if (!amount || !exchangeRate) return

        const inputAmount = parseFloat(amount)
        if (isNaN(inputAmount) || inputAmount <= 0) {
            setResult('Por favor, digite um número válido')
            return
        }

        let convertedAmount
        let resultText

        if (conversionType === 'dollar-to-real') {
            convertedAmount = inputAmount * exchangeRate
            resultText = `$${inputAmount.toFixed(2)} USD = R$${convertedAmount.toFixed(2)} BRL`
        } else {
            convertedAmount = inputAmount / exchangeRate
            resultText = `R$${inputAmount.toFixed(2)} BRL = $${convertedAmount.toFixed(2)} USD`
        }

        setResult(resultText)
    }

    return (
        <div className="p-5 max-w-md mx-auto">
            <p className="text-xl mb-4"><strong><u>CONVERSOR DE MOEDA</u></strong></p>
            <p className="text-sm mb-4">
                Conversor especial para ajudar com câmbio de moeda.
                {usingCachedData && (
                    <span className="text-blue-600"> (Usando dados de hoje)</span>
                )}
            </p>
            
            {loading && <p className="text-lg">Carregando taxa...</p>}
            {error && <p className="text-red-500 mb-4">Erro: {error}</p>}
            
            {exchangeRate && !loading && (
                <div className="space-y-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-lg">Taxa atual: 1 USD = {exchangeRate.toFixed(4)} BRL</p>
                    </div>

                    <div className="space-y-6">
                        {/* Conversion Type Selection */}
                        <div className="space-y-3">
                            <p className="text-lg font-semibold">Escolha o tipo de conversão:</p>
                            
                            <button
                                type="button"
                                onClick={() => {
                                    setConversionType('dollar-to-real')
                                    setResult(null)
                                }}
                                className={`w-full p-4 text-lg rounded-lg border-2 ${
                                    conversionType === 'dollar-to-real'
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'bg-white text-black border-gray-300 hover:border-blue-300'
                                }`}
                            >
                                DÓLAR → REAL
                            </button>
                            
                            <button
                                type="button"
                                onClick={() => {
                                    setConversionType('real-to-dollar')
                                    setResult(null)
                                }}
                                className={`w-full p-4 text-lg rounded-lg border-2 ${
                                    conversionType === 'real-to-dollar'
                                        ? 'bg-green-500 text-white border-green-500'
                                        : 'bg-white text-black border-gray-300 hover:border-green-300'
                                }`}
                            >
                                REAL → DÓLAR
                            </button>
                        </div>

                        {/* Amount Input */}
                        <div className="space-y-2">
                            <label className="text-lg font-semibold block">
                                {conversionType === 'dollar-to-real' 
                                    ? 'Digite o valor em DÓLARES:'
                                    : 'Digite o valor em REAIS:'}
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value)
                                    setResult(null)
                                }}
                                placeholder={conversionType === 'dollar-to-real' ? '0.00' : '0,00'}
                                step="0.01"
                                min="0"
                                className="w-full p-4 text-xl border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Convert Button */}
                        <button
                            onClick={handleConvert}
                            className="w-full bg-purple-600 text-white p-5 text-xl font-bold rounded-lg hover:bg-purple-700 active:bg-purple-800"
                        >
                            CONVERTER
                        </button>
                    </div>

                    {/* Result Display */}
                    {result && (
                        <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg">
                            <p className="text-xl font-bold text-center">{result}</p>
                        </div>
                    )}
                </div>
            )}
        <p className="text-2xl py-7"><strong><u>PRIVACY NOTICE</u></strong></p>
        
        <p>
        This endpoint is for the sole purpose of helping my mother with her needs to calculate exchange rates.
        It uses ExchangeRate-API which is limited by one call per day. Whenever you use this endpoint, it will store
        the results from ExchangeRate-API into your device local storage.
        </p>

        </div>
    )
}

export default Janice