class AmodelsController < ApplicationController
  before_action :set_amodel, only: [:show, :edit, :update, :destroy]

  # GET /amodels
  # GET /amodels.json
  def index
    @amodels = Amodel.all
  end

  # GET /amodels/1
  # GET /amodels/1.json
  def show
  end

  # GET /amodels/new
  def new
    @amodel = Amodel.new
  end

  # GET /amodels/1/edit
  def edit
  end

  # POST /amodels
  # POST /amodels.json
  def create
    @amodel = Amodel.new(amodel_params)

    respond_to do |format|
      if @amodel.save
        format.html { redirect_to @amodel, notice: 'Amodel was successfully created.' }
        format.json { render :show, status: :created, location: @amodel }
      else
        format.html { render :new }
        format.json { render json: @amodel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /amodels/1
  # PATCH/PUT /amodels/1.json
  def update
    respond_to do |format|
      if @amodel.update(amodel_params)
        format.html { redirect_to @amodel, notice: 'Amodel was successfully updated.' }
        format.json { render :show, status: :ok, location: @amodel }
      else
        format.html { render :edit }
        format.json { render json: @amodel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /amodels/1
  # DELETE /amodels/1.json
  def destroy
    @amodel.destroy
    respond_to do |format|
      format.html { redirect_to amodels_url, notice: 'Amodel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_amodel
      @amodel = Amodel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def amodel_params
      params.require(:amodel).permit(:name, :gender, :age, :desc, :nationality, :city, :category, :height, :burst, :waist, :hip, :eye, :shoe, :fb, :tw, :ig, :email, :tel, :pimage, :avatar, portfolios: [])
    end
end
