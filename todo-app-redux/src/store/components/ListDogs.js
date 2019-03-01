import React from 'react';

class ListDogs extends React.Component {

    render() {
        console.log(this.props.dogs);
        return (
            <div>
                <table className="todoTable">
                    <thead>
                        <tr>
                            <th className="todoNumber">#</th>
                            <th className="todoItem">ID</th>
                            <th>Image</th>
                            <th>Breeds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dogs.map((dog, index) => (
                            <tr key={index}>
                                <td className="todoNumber">Task {index + 1}</td>
                                <td className="dogId">{dog.id}</td>
                                <td className="dogUrl"><img src={dog.url}></img></td>
                                <td className="dogBreeds">
                                    {dog.breeds.map((breed, index) => (
                                        <div key={index}>
                                        <p>breed_group: {breed.breed_group}</p>
                                        <p>height: {breed.height.imperial} -- {breed.height.metric}</p>
                                        <p>name: {breed.name}</p>
                                        </div>
                                ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >

        );
    }
}

export default ListDogs;