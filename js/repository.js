class Repository {
    constructor(prefijo) {
        let pref = window.location.href + "api/";
        console.log(pref);
        if (this.prefijo == undefined) {
            this.prefijo = pref;
        } else {
            this.prefijo = prefijo;
        }
    }

    getModels(nombre, callback) {
        $.ajax({
            url: this.prefijo + nombre,
            type: 'GET',
            dataType: 'json',
            success: function (json) {
                callback(json);
            },
            error: function (jqXHR, status, error) {
                alert('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {}
        });
    };

    getModelosTipo(nombre, callback, tipo) {
        $.ajax({
            url: this.prefijo + nombre + "/" + tipo,
            type: 'GET',
            dataType: 'json',
            success: function (json) {
                callback(json);
            },
            error: function (jqXHR, status, error) {
                alert('Disculpe, existió un problema');
            },
            complete: function (jqXHR, status) {}
        });
    }
};