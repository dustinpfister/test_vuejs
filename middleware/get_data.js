// Simple get demo data back end for examples
module.exports = (opt) => {

    return (req, res) => {
        res.json({
            n: 42,
            foo: 'bar'
        });
    };

};
