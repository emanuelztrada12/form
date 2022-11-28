import generalFormModel from "../FormModel/generalFormModel";
import AutorizationForm from "../Forms/AutorizationForm";
import FamilyForm       from "../Forms/FamilyForm";
import General          from "../Forms/General";
import SonForm          from "../Forms/SonForm";
import BrothersForm     from "../Forms/BrothersForm";
import StepBrothersForm from "../Forms/StepBrothersForm";
import ConyugueForm     from "../Forms/ConyugueForm";
import GrandfatherForm  from "../Forms/GrandfatherForm";
import WorkForm         from "../Forms/WorkForm";
import EconomicForm     from "../Forms/EconomicForm";
import SocialForm       from "../Forms/SocialForm";
import CriminalForm     from "../Forms/CriminalForm";
import HealForm         from "../Forms/HealthForm";
import ObjectivsForm    from "../Forms/ObjectivsForm";
import SindicatosForm   from "../Forms/SindicatosForm";
import HonestidadForm   from "../Forms/HonestidadForm";
import RedSocialForm    from "../Forms/RedSocialForm";
import EducacionalForm  from "../Forms/EducacionalForm";

const { formId, formField } = generalFormModel;

export default function _renderStepContent(step, values) {
    switch (step) {
      case 0:
        return <AutorizationForm formField={formField} values={values} />;
      case 1:
        return <General formField={formField} values={values} />;
      case 2:
        return <FamilyForm formField={formField} values={values} />;
      case 3:
        return <SonForm formField={formField} values={values} />;
      case 4:
        return <BrothersForm formField={formField} values={values} />;
      case 5:
        return <StepBrothersForm formField={formField} values={values} />;
      case 6:
        return <ConyugueForm formField={formField} values={values} />;
      case 7:
        return <GrandfatherForm formField={formField} values={values} />;
      case 8:
        return <EducacionalForm formField={formField} values={values} />;
      case 9:
        return <WorkForm formField={formField} values={values} />;
      case 10:
        return <EconomicForm formField={formField} values={values} />;
      case 11:
        return <SocialForm formField={formField} values={values} />;
      case 12:
        return <CriminalForm formField={formField} values={values} />;
      case 13:
        return <HealForm formField={formField} values={values} />;
      case 14:
        return <SindicatosForm formField={formField} values={values} />;
      case 15:
        return <ObjectivsForm formField={formField} values={values} />;
      case 16:
        return <HonestidadForm formField={formField} values={values} />;
      case 17:
        return <RedSocialForm formField={formField} values={values} />;
      default:
        return <div>Not Found</div>;
    }
  }