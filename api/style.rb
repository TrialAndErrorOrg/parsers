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

        parsed = AnyStyle.parse(body,{format:'csl'})
        res.status = 200
        res['Content-Type'] = 'application/json; charset=utf-8'
        res['Access-Control-Allow-Origin'] = '*'
        res.body = JSON.generate(parsed)
end

