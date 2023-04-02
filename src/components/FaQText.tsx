import React, { FC } from "react";

const FaQText: FC = () => {
	return (
        <div className="justify-column-div unmargin">
            <h3>Чи можна використовувати здобуті на сайті знання у школі?</h3>
            <p className="border-left-p">Звісно, бо теоретичний матеріал та тести взяті з шкільної програми.</p>
            <h3>Що буде, якщо я вийду зі сторінки тестування під час виконання тесту?</h3>
            <p className="border-left-p">На жаль, ваші відповіді будуть анульовані.</p>
        </div>
	)
}

export default FaQText