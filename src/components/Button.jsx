import React from 'react'

const Button = ({text,slogan,onclick}) => {
  return (
    <div>
        <p className="text-sm mt-6 text-slate-600">
            {slogan}
            <a
              href="javascript:void(0);"
              className="text-blue-600 font-medium hover:underline ml-1"
              onClick={onclick}
            >
            {text}
            </a>
          </p>
    </div>
  )
}

export default Button
