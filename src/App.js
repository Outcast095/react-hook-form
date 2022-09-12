import './App.css';
import { useForm } from "react-hook-form";

function App() {

    const {
        register, /// позволяет регистрировать различные поля для формы
        formState: {
            errors   /// регистрирует ошибки
        },
        handleSubmit,  /// дополнительная обертка над кастомным хендлером
        reset            /// очищает форму после действия
    } = useForm({
        mode: "onBlur"  ///"onSubmit" - режим по умолчанию, "onBlur" когда убрали фокус с input, "onChange" при введении текста  происходит валидация input
    })

    const onSubmitHandler = (data) => {    /// все что введено в поле input попадает в data // если в input есть ошибки onSubmitHandler не будет вызван
        console.log(data)
        reset()                           /// очищает форму после действия
    }

  return (
    <div className="App">


        <h1>React-hook-form</h1>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <input {...register("Name",            ///// уникальное имя input по которому
                    // {required: true}                         // вместо true мы можем записать текст  //// валидация input на отсутствие заполнения
                    {required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                        maxLength: {
                            value: 5,
                            message: "слишком короткая строка"
                        }
                    },

                )}/>
            </div>
            <div>
                <input {...register("SureName",            ///// уникальное имя input по которому
                    // {required: true}                         // вместо true мы можем записать текст  //// валидация input на отсутствие заполнения
                    {required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                        maxLength: {
                            value: 5,
                            message: "слишком длинная строка"
                        }
                    },

                )}/>
            </div>

            <div>
                <input {...register("Email",            ///// уникальное имя input по которому
                    // {required: true}                         // вместо true мы можем записать текст  //// валидация input на отсутствие заполнения
                    {required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "это не имэйл"
                        }
                    },

                )}/>
            </div>

            <div style={{height: 40}}>

                {errors?.Name && <p>{errors?.Name?.message || "поле ввода не заолнено...."}</p>}
                {errors?.SureName && <p>{errors?.SureName?.message || "поле ввода не заолнено...."}</p>}
                {errors?.Email && <p>{errors?.Email?.message || "эмайл не верен'...."}</p>}

                {/*если errors выдает true, дальше программа ишет input в котором ошибка и если оно тоже
                 выдает true значит вырисовывается значение в <p>поле ввода не заолнено....</p>*/}
            </div>
            <input type="submit"/>
        </form>
    </div>
  );
}

export default App;
