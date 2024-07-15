/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const LegalWarningScreen = ({ type }) => {
  useEffect(() => {
    // Desplazarse hacia la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  let title, content;

  // Determinar el título y el contenido según el tipo de aviso seleccionado
  if (type === 'privacy') {
    title = 'Política de Privacidad';
    content = (
      <>
        <h3>Política de Privacidad</h3>
        <p>
          Última actualización: 15/07/2024
        </p>
        <p>
          Rubén Ruzafa ("nosotros", "nuestro", "nuestra" o "la empresa") se compromete a proteger y respetar tu privacidad. Esta política de privacidad describe cómo recopilamos, utilizamos y compartimos la información personal identificable que recabamos a través de nuestro sitio web www.rubenruzafa.com y www.rubenruzafa.es (el "Sitio").
        </p>
        <p>
          Por favor, lee esta política detenidamente para entender nuestras prácticas respecto a tus datos personales y cómo los trataremos.
        </p>
        <p>
          Recopilamos información personal identificable cuando te registras en nuestro sitio, completas formularios, realizas una compra, suscribes a nuestro boletín, participas en concursos o encuestas, o interactúas de cualquier otra manera con nosotros.
        </p>
        <p>
          La información que podemos recabar incluye, pero no se limita a: nombre completo y dirección de correo electrónico.
        </p>
        <p>
          Además, recopilamos automáticamente cierta información sobre tu dispositivo y tu uso del Sitio utilizando cookies y tecnologías similares. Esta información puede incluir tu dirección IP, tipo de navegador, páginas visitadas, y otra información de diagnóstico.
        </p>
        <p>
          Utilizamos la información que recopilamos para personalizar tu experiencia en nuestro sitio, mejorar nuestros productos y servicios, y cumplir con obligaciones legales y regulaciones aplicables.
        </p>
        <p>
          No vendemos, alquilamos ni compartimos tu información personal con terceros no afiliados, excepto como se describe en esta política o con tu consentimiento expreso.
        </p>
        <p>
          Implementamos medidas de seguridad razonables para proteger la información personal que recopilamos y almacenamos. Sin embargo, ten en cuenta que ninguna transmisión por Internet o método de almacenamiento electrónico es completamente seguro.
        </p>
        <p>
          Tienes derecho a acceder, corregir, actualizar o eliminar tu información personal en cualquier momento. También puedes oponerte al procesamiento de tu información personal, solicitar la restricción de su procesamiento o ejercer tu derecho a la portabilidad de datos. Si deseas ejercer cualquiera de estos derechos, contáctanos a través de los datos de contacto proporcionados más abajo.
        </p>
        <p>
          Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas de información. Te recomendamos revisar periódicamente esta página para obtener la información más reciente sobre nuestras prácticas de privacidad.
        </p>
      </>
    );
  } else if (type === 'cookies') {
    title = 'Política de Cookies';
    content = (
      <>
        <h3>Política de Cookies</h3>
        <p>
          En nuestro sitio web utilizamos cookies y tecnologías similares para mejorar tu experiencia y nuestros servicios. Al continuar navegando, consideramos que aceptas su uso. Puedes cambiar la configuración u obtener más información en nuestra Política de Cookies.
        </p>
        <p>
          Una cookie es un pequeño archivo de texto que se almacena en tu dispositivo para ayudar a analizar el tráfico web o permitirte utilizar ciertas funciones del sitio. Utilizamos cookies para personalizar contenido y anuncios, proporcionar funciones de redes sociales y analizar nuestro tráfico.
        </p>
        <p>
          Puedes configurar tu navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie. Sin embargo, si no aceptas cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
        </p>
        <p>
          Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política.
        </p>
      </>
    );
  } else if (type === 'legal') {
    title = 'Aviso Legal';
    content = (
      <>
        <h3>Aviso Legal</h3>
        <p>
          Rubén Ruzafa es una entidad legal registrada en España. Nuestro número de identificación fiscal es [número de identificación fiscal]. Esta página web es propiedad de Rubén Ruzafa Cueto.
        </p>
        <p>
          El acceso a este sitio web y el uso de la información que contiene están sujetos a los términos y condiciones descritos a continuación, así como a la legislación aplicable en España.
        </p>
        <p>
          La información proporcionada en este sitio web es solo para fines informativos generales. Nos esforzamos por mantener la información actualizada y precisa, pero no ofrecemos garantías de ninguna clase, expresas o implícitas, sobre la integridad, precisión, fiabilidad, idoneidad o disponibilidad respecto al sitio web o la información, productos, servicios o gráficos relacionados contenidos en el sitio web para cualquier propósito. Cualquier confianza que deposites en dicha información es, por lo tanto, estrictamente bajo tu propio riesgo.
        </p>
        <p>
          En ningún caso seremos responsables por cualquier pérdida o daño, incluyendo sin limitación, pérdida o daño indirecto o consecuente, o cualquier pérdida o daño derivado de la pérdida de datos o beneficios que surjan de, o en conexión con, el uso de este sitio web.
        </p>
        <p>
          A través de este sitio web puedes enlazar con otros sitios web que no están bajo el control de Rubén Ruzafa. No tenemos control sobre la naturaleza, el contenido y la disponibilidad de esos sitios. La inclusión de cualquier enlace no implica necesariamente una recomendación ni respaldamos las opiniones expresadas dentro de ellos.
        </p>
      </>
    );
  }

  return (
    <div className="container mt-custom">
      <div className="row mb-5">
        <div className="col">
          <h2 className="text-center mb-4">{title}</h2>
          <div className="bg-light p-4 rounded">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalWarningScreen;
