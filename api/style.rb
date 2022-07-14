# encoding: utf-8

require 'anystyle'
require 'json'

Handler = Proc.new do |req, res|
        ## Fucking ruby sets the encoding to ASCII for some reason
        body = req.body().force_encoding('UTF-8')
        if !body
            res.status = 401
            res['Content-type']= 'text/plain'
            res.body= "Hey you didn't send anything dummy"
            return
        end

        ## Get the 'format' parameter from the request query string
        style = req.query['format']


        parsed = AnyStyle.parse(body,{format: style || 'csl'})


        res.status = 200
        res['Access-Control-Allow-Origin'] = '*'
        ## if then

        if style == 'json' || !style|| style == 'csl'
          res['Content-Type'] = 'application/json; charset=utf-8'
          res.body = JSON.generate(parsed)
        else
          res['Content-Type'] = 'text/plain; charset=utf-8'
          res.body = parsed
        end
end

