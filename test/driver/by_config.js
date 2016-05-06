var configDriver = function(client)
{
    this.client = null;

    this.__construct = function(client)
    {
        this.client = client;
    };

    this.getName = function()
    {
        return 'configuration json';
    }

    this.isSupported = function(type)
    {
         return type == 'json';
    };

    this.execute = function(source)
    {
        var configuration = require(kernelDir + '/' + source);

        configuration.forEach(function(scenario) {
            this.client.url(scenario['url']);
            this.client.pause(2000);

            scenario['steps'].forEach(function(step)
            {
                console.log('step run !');
                this.client.click(step['element']);
                this.client.pause(step['wait']);
            }, this);
        }, this);
    };

    this.__construct(client);
};

module.exports = configDriver;