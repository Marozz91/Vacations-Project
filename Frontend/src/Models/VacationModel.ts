
class VacationModel {

    public vacationId: number;
    public destination: string;
    public description: string;
    public checkIn: string;
    public checkOut: string;
    public price: number;
    public imageUrl: string;
    public image: FileList;
    public followersAmount: number;
    public isFollowing: number;

    public static destinationValidation = {

        required: { value: true, message: "Destination is required" }
    }

    public static descriptionValidation = {

        required: { value: true, message: "Description is required" },
        minLength: { value: 4, message: "Description Must be more then 4 Charecter" },
        maxLength: { value: 2000, message: "Description Must be less then 2000 Characters" }
    }


    public static checkInValidation = {

        required: { value: true, message: "Check in is required" },
        min: { value: new Date().toISOString().split('T')[0], message: "You have chosen an old date!" }
    }


    public static checkOutValidation = {

        required: { value: true, message: "Check out is required" },
        min: { value: new Date().toISOString().split('T')[0], message: "Check out can't be before Check in date!" }
    }

    public static priceValidation = {

        required: { value: true, message: "Price is required" },
        min: { value: 1, message: "Price must be between 1 - 10000" },
        max: { value: 10000, message: "Price must lower than 10000" }
    }

    public static imageValidation = {

        required: { value: true, message: "Image is required" },
    }


}
export default VacationModel;