import { type TextProps } from './Types';

export const TextBox: React.FC<TextProps> = ( {title, text1, text2, text3, image1, image2, side} ) => {
    if (side === true) {
        return (
            <div className="px-6 sm:px-15 py-20 sm:py-25 space-y-4">
                <h1 className="flex items-center underline justify-center text-7xl mx-auto">{title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <img
                            src={image1}
                            alt="image1"
                            className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
                        />
                        <img
                            src={image2}
                            alt="image2"
                            className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="text-2xl space-y-4">
                        <p className="flex items-center justify-left text-2xl mx-auto">{text1}<br/></p>
                        <p className="flex items-center justify-left text-2xl mx-auto">{text2}<br/></p>
                        <p className="flex items-center justify-left text-2xl mx-auto">{text3}</p>
                    </div>
                
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className="px-6 sm:px-15 py-20 sm:py-25 space-y-4">
                <h1 className="flex items-center underline justify-center text-7xl mx-auto">{title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="text-2xl space-y-4">
                        <p className="flex items-center justify-left text-2xl mx-auto">{text1}<br/></p>
                        <p className="flex items-center justify-left text-2xl mx-auto">{text2}<br/></p>
                        <p className="flex items-center justify-left text-2xl mx-auto">{text3}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <img
                            src={image1}
                            alt="image1"
                            className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
                        />
                        <img
                            src={image2}
                            alt="image2"
                            className="w-48 sm:w-64 h-60 sm:h-82 border object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        )
    }
}